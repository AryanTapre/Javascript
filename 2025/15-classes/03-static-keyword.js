// NOTE: https://javascript.info/static-properties-methods

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static create(title, date = new Date().toLocaleDateString()) {
        return new this(title, date);
    }

    static compare(articleA, articleB) {
        return articleA - articleB;
    }

    // get title() {
    //     return this.title;
    // }
    // get date() {
    //     return this.date;
    // }

    // set title(title) {
    //     this.title = title;
    // }
    // set date(date) {
    //     this.date = date;
    // }
};

const article = Article.create("aryantapre");
console.log(article.title);
console.log(article.date);






