"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FeedService = void 0;
var core_1 = require("@angular/core");
var FeedService = /** @class */ (function () {
    function FeedService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000/api/posts';
    }
    FeedService.prototype.getAllPosts = function () {
        return this.http.get(this.apiUrl);
    };
    FeedService.prototype.addPost = function (postData) {
        var _a;
        var formData = new FormData();
        formData.append('title', postData.title);
        formData.append('content', postData.content);
        if (postData.tags && postData.media) {
            (_a = postData.tags) === null || _a === void 0 ? void 0 : _a.forEach(function (tag) { return formData.append('tags', tag); });
            postData.media.forEach(function (file) { return formData.append('media', file); });
        }
        console.log("post data from service", postData);
        return this.http.post(this.apiUrl, formData);
    };
    FeedService.prototype.editPost = function (postId, updatedPost) {
        return this.http.put(this.apiUrl + "/edit/" + postId, updatedPost);
    };
    FeedService.prototype.deletePost = function (postId) {
        var url = this.apiUrl + "/p/" + postId;
        return this.http["delete"](url);
    };
    FeedService.prototype.likePost = function (postId) {
        return this.http.post(this.apiUrl + "/" + postId + "/like", {});
    };
    FeedService.prototype.commentOnPost = function (postId, comment) {
        return this.http.post(this.apiUrl + "/" + postId + "/comment", { comment: comment });
    };
    FeedService.prototype.deleteComment = function (postId, commentId) {
        return this.http["delete"]("your_api_url/posts");
    };
    FeedService.prototype.loadCurrentDoctorPosts = function () {
        return this.http.get(this.apiUrl + "/get-doctor-posts");
    };
    FeedService.prototype.getPostsOfDoctorById = function (doctorId) {
        return this.http.get(this.apiUrl + "/get-doctor-post/" + doctorId);
    };
    FeedService.prototype.replyToComment = function (postId, commentId, content) {
        return this.http.post(this.apiUrl + "/" + postId + "/comment/reply", { commentId: commentId, content: content });
    };
    FeedService.prototype.getPostById = function (postId) {
        return this.http.get(this.apiUrl + "/p/" + postId);
    };
    FeedService.prototype.toggleSavePost = function (postId) {
        return this.http.post(this.apiUrl + "/p/" + postId + "/toggle-save", {});
    };
    FeedService.prototype.getSavedPosts = function () {
        return this.http.get(this.apiUrl + "/p/get-saved-posts");
    };
    FeedService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FeedService);
    return FeedService;
}());
exports.FeedService = FeedService;
