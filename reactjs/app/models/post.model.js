module.exports = (mongoose) => {

    const schema = mongoose.Schema(
        {
            title: String,
            body: String,
            published: Boolean
        }, {
            timestamps: true
        })

    schema.method("toJSON", function() {
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return Object
    })

    const Post = mongoose.model("post", schema)
    return Post
}