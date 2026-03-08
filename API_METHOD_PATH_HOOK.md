# API Mapping (Backend ↔ Frontend RTK Query)

> Base URL: `/api/v1`

## Auth

| METHOD | PATH | FE hook |
|---|---|---|
| POST | `/auth/register` | `useRegisterMutation` |
| POST | `/auth/login` | `useLoginMutation` |
| POST | `/auth/forgot-password` | `useForgotPasswordMutation` |
| PATCH | `/auth/reset-password/:token` | `useResetPasswordMutation` |

## User

| METHOD | PATH | FE hook |
|---|---|---|
| GET | `/users/me` | `useGetMeQuery` |
| PATCH | `/users/update-me` | `useUpdateMeMutation` |
| PATCH | `/users/update-password` | `useUpdatePasswordMutation` |

## Catalog + Health

| METHOD | PATH | FE hook |
|---|---|---|
| GET | `/health` | `useGetHealthQuery` |
| GET | `/brands` | `useGetBrandsQuery` |
| GET | `/categories` | `useGetCategoriesQuery` |
| GET | `/products` | `useGetProductsQuery` |
| GET | `/products/:slug` | `useGetProductBySlugQuery` |

## Cart

| METHOD | PATH | FE hook |
|---|---|---|
| GET | `/cart` | `useGetMyCartQuery` |
| POST | `/cart/items` | `useAddToCartMutation` |
| PATCH | `/cart/items/:productId` | `useUpdateCartItemQuantityMutation` |
| DELETE | `/cart/items/:productId` | `useRemoveFromCartMutation` |
| DELETE | `/cart/clear` | `useClearCartMutation` |

## Order

| METHOD | PATH | FE hook |
|---|---|---|
| POST | `/orders/checkout` | `useCheckoutMutation` |
| GET | `/orders/my-orders` | `useGetMyOrdersQuery` |
| GET | `/orders/:id` | `useGetMyOrderByIdQuery` |

## Review

| METHOD | PATH | FE hook |
|---|---|---|
| GET | `/products/:productId/reviews` | `useGetProductReviewsQuery` |
| POST | `/products/:productId/reviews` | `useCreateReviewMutation` |
| PATCH | `/reviews/:id` | `useUpdateReviewMutation` |
| DELETE | `/reviews/:id` | `useDeleteReviewMutation` |

## Wishlist

| METHOD | PATH | FE hook |
|---|---|---|
| GET | `/wishlist` | `useGetWishlistQuery` |
| POST | `/wishlist/toggle/:productId` | `useToggleWishlistMutation` |

## Blog

| METHOD | PATH | FE hook |
|---|---|---|
| GET | `/blogs` | `useGetBlogsQuery` |
| GET | `/blogs/:slug` | `useGetBlogBySlugQuery` |
| POST | `/blogs/:blogId/comments` | `useCreateBlogCommentMutation` |

## Admin - Brands

| METHOD | PATH | FE hook |
|---|---|---|
| POST | `/admin/brands` | `useCreateBrandMutation` |
| PATCH | `/admin/brands/:id` | `useUpdateBrandMutation` |
| DELETE | `/admin/brands/:id` | `useDeleteBrandMutation` |

## Admin - Categories

| METHOD | PATH | FE hook |
|---|---|---|
| POST | `/admin/categories` | `useCreateCategoryMutation` |
| PATCH | `/admin/categories/:id` | `useUpdateCategoryMutation` |
| DELETE | `/admin/categories/:id` | `useDeleteCategoryMutation` |

## Admin - Products

| METHOD | PATH | FE hook |
|---|---|---|
| POST | `/admin/products` | `useCreateProductMutation` |
| PATCH | `/admin/products/:id` | `useUpdateProductMutation` |
| PATCH | `/admin/products/:id/stock` | `useUpdateProductStockMutation` |
| DELETE | `/admin/products/:id` | `useDeleteProductMutation` |

## Admin - Orders

| METHOD | PATH | FE hook |
|---|---|---|
| GET | `/admin/orders` | `useAdminGetOrdersQuery` |
| GET | `/admin/orders/:id` | `useAdminGetOrderByIdQuery` |
| PATCH | `/admin/orders/:id/status` | `useAdminUpdateOrderStatusMutation` |

## Admin - Coupons

| METHOD | PATH | FE hook |
|---|---|---|
| GET | `/admin/coupons` | `useAdminListCouponsQuery` |
| GET | `/admin/coupons/:id` | `useAdminGetCouponByIdQuery` |
| POST | `/admin/coupons` | `useAdminCreateCouponMutation` |
| PATCH | `/admin/coupons/:id` | `useAdminUpdateCouponMutation` |
| DELETE | `/admin/coupons/:id` | `useAdminDeleteCouponMutation` |

## Admin - Sales

| METHOD | PATH | FE hook |
|---|---|---|
| GET | `/admin/sales` | `useAdminListSalesQuery` |
| GET | `/admin/sales/:id` | `useAdminGetSaleByIdQuery` |
| POST | `/admin/sales` | `useAdminCreateSaleMutation` |
| PATCH | `/admin/sales/:id` | `useAdminUpdateSaleMutation` |
| DELETE | `/admin/sales/:id` | `useAdminDeleteSaleMutation` |

## Admin - Dashboard

| METHOD | PATH | FE hook |
|---|---|---|
| GET | `/admin/dashboard/overview` | `useAdminGetOverviewQuery` |

## Admin - Reviews

| METHOD | PATH | FE hook |
|---|---|---|
| GET | `/admin/reviews` | `useAdminGetReviewsQuery` |
| PATCH | `/admin/reviews/:id/reply` | `useAdminReplyReviewMutation` |
| DELETE | `/admin/reviews/:id` | `useAdminDeleteReviewMutation` |

## Admin - Blogs + Comments

| METHOD | PATH | FE hook |
|---|---|---|
| GET | `/admin/blogs` | `useAdminGetBlogsQuery` |
| POST | `/admin/blogs` | `useAdminCreateBlogMutation` |
| PATCH | `/admin/blogs/:id` | `useAdminUpdateBlogMutation` |
| DELETE | `/admin/blogs/:id` | `useAdminDeleteBlogMutation` |
| GET | `/admin/comments` | `useAdminGetCommentsQuery` |
| PATCH | `/admin/comments/:id/status` | `useAdminUpdateCommentStatusMutation` |
| DELETE | `/admin/comments/:id` | `useAdminDeleteCommentMutation` |
