// * `POST   /api/books/:id/favorite`: 対象の本をお気に入り登録 [ログインユーザー]
// * `DELETE /api/books/:id/favorite`: 対象の本のお気に入り解除 [ログインユーザー]
// TODO: REST APIでないものとの命名の区別の方法考える
import { Book } from "@/types/domain/book";
import { User } from "@/types/domain/user";

// POST
export type FindLikeByBookId = {
  bookId: Book["id"];
};

export type FindLikeByBookIdResponse = {
  count: number;
};

export type PostLikeRequest = {
  bookId: Book["id"];
  userId: User["id"];
};

export type PostLikeResponse = {
  count: number;
};

// DELETE
export type DeleteLikeRequest = {
  bookId: Book["id"];
  userId: User["id"];
};

export type DeleteLikeResponse = {
  count: number;
};
