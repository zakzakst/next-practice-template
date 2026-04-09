// * `GET    /api/books`       : 本の一覧取得（検索クエリ `?q=` などを許容） [全員]
// * `GET    /api/books/:id`   : 特定の本の詳細取得 [全員]
// * `POST   /api/books`       : 本の新規登録 [Adminのみ]
// * `PUT    /api/books/:id`   : 本の情報の更新 [Adminのみ]
// * `DELETE /api/books/:id`   : 本の削除 [Adminのみ]
// *
// * `GET    /api/favorites`         : ログインユーザーのお気に入り本一覧取得 [ログインユーザー]
// TODO: データ取得のルールの考え方がまとまらない。。一旦POSTで取得・条件はすべてリクエストに含める方針でやってみる
import { Book } from "@/types/domain/book";
import { User } from "@/types/domain/user";

// Create
export type CreateBookRequest = {
  title: string;
  author: string;
  description: string;
  thumbnail?: string;
};

export type CreateBookResponse = Book;

// FindAll
export type FindAllBooksParams = {
  keyword?: string;
  page?: string;
};

export type FindAllBooksResponse = {
  total: number;
  page: number;
  limit: number;
  items: Book[];
};

// FindOne
export type FindOneBookResponse = Book;

// Update
export type UpdateBookRequest = {
  title: string;
  author: string;
  description: string;
  thumbnail?: string;
};

export type UpdateBookResponse = Book;

// FindByUserLike
export type FindAllBooksByUserLikeRequest = {
  userId: User["id"];
  page?: string;
};

export type FindAllBooksByUserLikeResponse = {
  total: number;
  page: number;
  limit: number;
  items: Book[];
};
