import React, { Fragment, useCallback, useEffect, useState } from "react";
import ContentHome from "./ContentHome";
import Button from "@atlaskit/button";
import * as postService from "../../../apiService/postService";
import * as RecipesService from "../../../apiService/RecipesService";
import * as request from "../../../api/axiosClient";
import * as headDefault from "../../Layout/DefaultLayout/Header/HeaderDefault";
import * as ConstantsList from "../../../const/ConstFile";
import axios from "axios";
import Tabs, { Tab, TabList, TabPanel, useTabPanel } from "@atlaskit/tabs";
import Spinner, { Size } from "@atlaskit/spinner";
import Banner from "@atlaskit/banner";
import ErrorIcon from "@atlaskit/icon/glyph/error";
import TextField from "@atlaskit/textfield";
import { v4 } from "uuid";
import Posts from "../../PostsApi/Posts";
import ModalPost from "../../PostsApi/ModalPost";
import { Field, HelperMessage } from "@atlaskit/form";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";
export default function Home() {
  const [show, setShow] = useState(false);
  const [tab, setTab] = useState("posts");
  const [posts, setPosts] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState([]);
  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
    setShow(false);
  }, []);

  const storagedTodoList = JSON.parse(
    localStorage.getItem(ConstantsList.TODO_APP_STORAGE_KEY)
  );
  const [todoList, setTodoList] = useState(storagedTodoList ?? []);
  const [textInput, setTextInput] = useState("");
  useEffect(() => {
    localStorage.setItem(
      ConstantsList.TODO_APP_STORAGE_KEY,
      JSON.stringify(todoList)
    );
  }, [todoList]);
  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);
  const onAddBtnClick = useCallback(
    (e) => {
      setTodoList([{ id: v4(), name: textInput, isCompleted: 0 }, ...todoList]);
      setTextInput("");
    },
    [textInput, todoList]
  );
  const onCheckBtnCick = useCallback((id) => {
    console.log(id);
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: 1 } : todo
      )
    );
  }, []);

  const onClickBtnTab = (nameTab) => {
    setTab(nameTab);
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await postService.getAPI(tab);
      if (result.length > 0) {
        setLoading(true);
        console.log(result);
        setPosts(result);
      } else {
        setLoading(false);
      }
    };
    fetchAPI();
    // fetchAPISpoonacular();
  }, [tab]);

  const fetchAPISpoonacular = async () => {
    const result = await RecipesService.getAPISpoonacular("recipes");
    if (result.code === 200 || result.code) {
      setRecipes(result);
    }
    setErrorMessage({ mes: result.message, code: result.code });
    setRecipes([]);
  };

  const onEditBtnClick = useCallback(
    (data) => {
      console.log(data);
      setEditData(data)
      openModal();
    },
    [openModal,setEditData]
  );
  return (
    <>
      <TextField
        name="add-todo"
        placeholder="Add more to work..."
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={onAddBtnClick}
          >
            ADD
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
      />
      <Button
        className="btn btn-primary customize-btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </Button>
      <Tabs>
        <TabList>
          <Tab>Home Basic</Tab>
          <Tab>Receipe Tab</Tab>
          <Tab>Anime Tab</Tab>
        </TabList>
        <TabPanel>
          <div className="tab-toggle">
            <div>
              {show && (
                <>
                  <ContentHome
                    tabs={ConstantsList.CONFIG_TAB}
                    onClickBtnTab={onClickBtnTab}
                  />
                  <Posts
                    posts={posts}
                    onEditBtnClick={onEditBtnClick}
                    openModal = {openModal}
                  />
                </>
              )}
              {!show && !isOpen ? (
                Fragment
              ) : (
                <>
                  <ModalPost onClose={closeModal} isOpen={isOpen} editDatas={editData} />
                </>
              )}
              {loading && show ? (
                Fragment
              ) : (
                <div className="loading-customize">
                  <Spinner size={100} />
                </div>
              )}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <h2>Content 2</h2>
            <div>
              {errorMessage && (
                <>
                  <div style={{ maxWidth: "100%", margin: "auto" }}>
                    <Banner
                      appearance="error"
                      icon={
                        <>
                          <ErrorIcon label="" secondaryColor="interit" />
                        </>
                      }
                      isOpen
                    >
                      {errorMessage.mes}
                      {errorMessage.code}
                    </Banner>
                  </div>
                </>
              )}
            </div>
          </div>

          {show &&
            recipes.map((recipe) => (
              <ul key={recipe.id}>
                <li>{recipe.title || recipe.name}</li>
              </ul>
            ))}
        </TabPanel>
        <TabPanel>
          <div>
            <h2>Anime Tab API </h2>
            <div>
              {errorMessage && (
                <>
                  <div style={{ maxWidth: "100%", margin: "auto" }}>
                    <Banner
                      appearance="error"
                      icon={
                        <>
                          <ErrorIcon label="" secondaryColor="interit" />
                        </>
                      }
                      isOpen
                    >
                      {errorMessage.mes}
                      {errorMessage.code}
                    </Banner>
                  </div>
                </>
              )}
            </div>
          </div>

          {show &&
            recipes.map((recipe) => (
              <ul key={recipe.id}>
                <li>{recipe.title || recipe.name}</li>
              </ul>
            ))}
        </TabPanel>
      </Tabs>
    </>
  );
}
