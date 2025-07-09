const express = require ('express');
const methodOverride = require('method-override');
const app = express();
const port = 8080;
const path = require('path'); // for path join
const {v4: uuidv4} = require('uuid'); //uuid package for unique id 
uuidv4();

app.use(methodOverride('_method')); // use for patch and delete

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [            // storing data in array called posts
    {
        id: uuidv4(),
        username: "rushi",
        content: "i love coding"
    },
    {
        id: uuidv4(),
        username: "viraj",
        content: "just lazing around"
    },
    {
        id: uuidv4(),
        username: "atharav",
        content: "just chilling"
    }
];

app.get("/posts", (req,res) => {         // main all post page
    res.render("index.ejs", { posts })
});  

app.get("/posts/new", (req, res) => {   // for adding new post (/public/new.ejs)
    res.render("new.ejs");   
});

app.post("/posts", (req, res) => {      // after adding new post redirecting to main page
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {   // this is for showing one profile id (/public/show.ejs)
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req, res) => {   // for update or edit the post content using id (/public/edit.ejs) and redirecting to /posts
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {  //for getting the req of edit nad rendering it
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id", (req, res) => {  // for deleting the post
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})

app.listen(port , () => {
    console.log("listening to port : " +port);
});