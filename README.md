# Quora-like RESTful Mini Blog

A simple Quora-inspired web app built with Node.js, Express, and EJS. Users can create, view, edit, and delete posts with a clean, Quora-style interface.

---

## Features

- View all posts
- Create a new post
- View post details
- Edit a post
- Delete a post
- Quora-like UI (responsive and modern)

---

## Demo

![Screenshot](https://github.com/user-attachments/assets/709e512e-e54f-4163-a861-3c54ca8f3405) <!-- Add a screenshot if you have one -->

---

## Getting Started

### 1. Fork This Repository

- Click the **Fork** button at the top right of this page to create your own copy.

### 2. Clone Your Fork

```sh
Example: git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
         cd REPO-NAME
try: git clone https://github.com/R-Dhawale/Quora-like-RESTful-Mini-Blog.git
     cd Quora-like-RESTful-Mini-Blog
```

### 3. Install Dependencies

This project uses [Node.js](https://nodejs.org/) (v14 or higher recommended) and [npm](https://www.npmjs.com/) (comes with Node.js).

```sh
npm install
```

### 4. Run the App

```sh
node index.js
```

The server will start on [http://localhost:8080/posts](http://localhost:8080/posts)

---

## Project Structure

```
/public         # Static files (CSS)
/views          # EJS templates
index.js        # Main server file
package.json    # Project metadata and dependencies
```

---

## Notes

- **Do not upload `node_modules/` to GitHub.**  
  This folder is automatically created by `npm install`.
- If you want to change the port, edit the `port` variable in `index.js`.
- All data is stored in-memory (array), so posts will reset when the server restarts.

---

## .gitignore

Make sure your repository has a `.gitignore` file with at least:

```
node_modules/
.env
.DS_Store
```

---

## License

MIT (or specify
