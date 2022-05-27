import React, { Fragment } from "react";
import { Field, HelperMessage } from "@atlaskit/form";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import TextArea from "@atlaskit/textarea";
const inputChangedHandler = (event) => {
  const updatedKeyword = event.target.value;
  // May be call for search result
};
export default function ModalPost({ isOpen, onClose, editDatas }) {
  return (
    <>
      {console.log(editDatas)}
      <ModalTransition>
        <Modal onClose={onClose}>
          <form>
            <ModalHeader>
              <ModalTitle>Edit a user</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <>
                {console.log(editDatas)}
                <Field id="id" name="id" label="Type your name to continue">
                  {({ fieldProps }) => {
                    return (
                      <>
                        {console.log(editDatas)}
                        <TextField
                          {...fieldProps}
                          defaultValue={editDatas.id}
                          value={editDatas.id || ""}
                        />
                        <HelperMessage>
                          {editDatas.id ? `Hello, ${editDatas.id}` : ""}
                        </HelperMessage>
                      </>
                    );
                  }}
                </Field>
                <Field id="body" name="body" label="Type your name to continue">
                  {({ fieldProps }) => {
                    return (
                      <>
                        {console.log(editDatas)}
                        <TextArea
                          {...fieldProps}
                          defaultValue={editDatas.body}
                          value={editDatas.body || ""}
                        />
                        <HelperMessage>
                          {editDatas.body ? `Hello, ${editDatas.body}` : ""}
                        </HelperMessage>
                      </>
                    );
                  }}
                </Field>
                <Field id="title" name="title" label="Type your name to continue">
                  {({ fieldProps }) => {
                    return (
                      <>
                        <TextField
                          {...fieldProps}
                          defaultValue={editDatas.title}
                          value={editDatas.title || ""}
                        />
                        <HelperMessage>
                          {editDatas.title ? `Hello, ${editDatas.title}` : ""}
                        </HelperMessage>
                      </>
                    );
                  }}
                </Field>
              </>
            </ModalBody>
            <ModalFooter>
              <Button appearance="subtle" onClick={onClose}>
                Close
              </Button>
              <Button appearance="primary" type="submit">
                Create
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </ModalTransition>
    </>
  );
}
