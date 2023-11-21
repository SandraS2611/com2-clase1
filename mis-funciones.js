export const ctrlGetAllPosts = (req, res) => {
    res.status(200).send("Hello from GET verb");
}

export const ctrlCreatePosts = (req, res) => {
  
  posts.push({
      title:"",
      desc: "",
      image: "",
    })

    res.sendStatus(201)

}

//export default controlador
//export { controlador }