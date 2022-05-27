import AlbumsApi from "../components/AlbumsApi/AlbumsApi";
import CommentsApi from "../components/CommentsApi/CommentsApi";
import { HeaderOnly } from "../components/Layout";
import Home from "../components/Layout/Home/Home";
import PhotosApi from "../components/PhotosApi/PhotosApi";
import PostsApi from "../components/PostsApi/PostsApi";
import RecipesAPI from "../components/RecipesAPI/RecipesAPI";
import TodosApi from "../components/TodosApi/TodosApi";
import UsersApi from "../components/UsersApi/UsersApi";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/post", component: PostsApi, layout: HeaderOnly },
  { path: "/album", component: AlbumsApi },
  { path: "/comment", component: CommentsApi },
  { path: "/photo", component: PhotosApi },
  { path: "/todo", component: TodosApi },
  { path: "/user", component: UsersApi },
  { path: "/recipe", component: RecipesAPI },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
