import conf from '../conf/conf.js';
import { Client, Account } from "appwrite";

class AuthService {
    constructor() {
        if (!AuthService.instance) {
            this.client = new Client();
            this.account = new Account(this.client);

            this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);

            AuthService.instance = this;
        }

        return AuthService.instance;
    }

    async createAccount({ email, password, name }) {
        try {
            const userId = this.generateValidUserId();
            const userAccount = await this.account.create(userId, email, password, name);
            if (userAccount) {
                console.log("Account created successfully, attempting to login...");
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error("Error creating account:", error);
            throw error;
        }
    }

    generateValidUserId() {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let userId = '';
        for (let i = 0; i < 36; i++) {
            userId += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return userId;
    }

    async login({ email, password }) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            console.log("Login successful:", session);
            return session;
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            console.log("Current user:", user);
            return user;
        } catch (error) {
            console.error("Error fetching current user:", error);
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            console.log("Logout successful");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    }
}

const authService = new AuthService();
Object.freeze(authService); // Ensures the singleton pattern

export default authService;
