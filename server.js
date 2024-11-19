import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Foto de uma paisagem natural",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Gráfico de barras representando vendas",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Desenho animado de um gato",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Imagem de um produto em e-commerce",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 6,
        descricao: "Icone de uma rede social",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();
app.use(express.json());


app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).send(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).send(posts[index]);
});
