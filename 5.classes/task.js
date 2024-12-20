class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name
		this.releaseDate = releaseDate
		this.pagesCount = pagesCount
		this.state = 100
		this.type = null
	}

	fix() {
		if (this.state == 100) {
			console.log("Книга новая и не подлежит восстановлению")
			return
		}
		if (this.state == 0) {
			console.log("Невозможно востановить книгу")
			return
		}
		this.state = this.state * 1.5
		if (this.state > 100) {
			this.state = 100
		}
		return this.state
	}

	set state(state) {
		if (state < 0) {
			this._state = 0
			return this._state
		}
		if (state > 100) {
			this._state = 100
			return this._state
		}
		this._state = state
		return this._state
	}

	get state() {
		return this._state
	}
}

class Library {
	constructor(name) {
		this.name = name
		this.books = []
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	}

	findBookBy(type, value) {
		const book = this.books.find(book => book[type] === value);
		return book ? book : null;
	}

	giveBookByName(bookName) {
		const delBook = this.findBookBy("name", bookName)
		this.books = this.books.filter(book => book !== delBook)
		return delBook
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.type = "magazine"
	}

}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.author = author
		this.type = "book"
	}

}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "fantastic"
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "novel"
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "detective"
	}
}
