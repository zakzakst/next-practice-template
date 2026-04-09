// * `GET    /api/books/:id/reviews` : 特定の本のレビュー一覧取得 [全員]
// * `GET    /api/users/me/reviews`  : 自分が投稿したレビュー履歴の一覧取得 (マイページ用) [ログインユーザー]
// * `POST   /api/books/:id/reviews` : 対象の本へのレビュー投稿 [ログインユーザー]
// * `PUT    /api/reviews/:id`       : 投稿済みレビューの編集 [投稿者本人のみ]
// * `DELETE /api/reviews/:id`       : 投稿済みレビューの削除 [投稿者本人のみ/Admin]
import { Book } from "@/types/domain/book";
import { Review } from "@/types/domain/review";
import { User } from "@/types/domain/user";

// Create
export type CreateReviewRequest = {
  bookId: Book["id"];
  userId: User["id"];
  rating: number;
  comment: string;
};

export type CreateReviewResponse = Review;

// FindAll
export type FindAllReviewsParams = {
  bookId?: Book["id"];
  userId?: User["id"];
};

export type FindAllReviewsResponse = {
  total: number;
  page: number;
  limit: number;
  items: Review[];
};

// FindOne
export type FindOneReviewResponse = Review;

// Update
export type UpdateReviewRequest = {
  rating: number;
  comment: string;
};

export type UpdateReviewResponse = Review;
