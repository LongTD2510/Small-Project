import AlbumsApi from "../components/AlbumsApi/AlbumsApi";
import CommentsApi from "../components/CommentsApi/CommentsApi";
import HeaderDefault from "../components/Layout/DefaultLayout/Header/HeaderDefault";
import PhotosApi from "../components/PhotosApi/PhotosApi";
import PostsApi from "../components/PostsApi/PostsApi";
import TodosApi from "../components/TodosApi/TodosApi";
import UsersApi from "../components/UsersApi/UsersApi";
const publicRoutes = [
  { path: '/', component: PostsApi },
  { path: '/album', component: AlbumsApi },
  { path: '/comment', component: CommentsApi },
  { path: '/photo', component: PhotosApi },
  { path: '/todo', component: TodosApi, layout: HeaderDefault },
  { path: '/user', component: UsersApi, layout: null},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
