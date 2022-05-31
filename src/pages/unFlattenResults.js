export default function unFlattenResult (results) {

    results.map(post => {
        const { harga, deskripsi, title, images } = post;
        return { frontmatter: { harga, deskripsi, title, images } };
    });
}
    