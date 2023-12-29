const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    text: {
        utype: String,
        maxLength: 500,
        required: true
    },
    img: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    replies: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            text: {
                type: String,
                required: true
            },
            userProfilePic: {
                type: String
            },
            username: {
                type: String
            }
        }
    ]
}, {
    timestamps: true
})

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;