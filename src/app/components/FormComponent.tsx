"use client";
import React from "react";
import "formik";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { addToAll, getAll } from "../service/storage_api";
import { Note, NoteFormValues } from "../data/note";
import { usePathname, useRouter } from "next/navigation";
const FormComponent = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex-grow min-h-full items-start p-4">
      <Formik
        initialValues={{ id: "", title: "", description: "", tags: [] }}
        onSubmit={(values: NoteFormValues, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            addToAll(values).then((result) => {
              setSubmitting(false);
            });
            router.push(pathname);
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="">
            <div>
              <label className="flex flex-col text-lg" htmlFor="title">
                Title:
                <Field
                  type="text"
                  name="title"
                  id="title"
                  className="px-1 rounded-lg focus:outline-solid outline-gray-600 "
                />
              </label>

              <ErrorMessage name="title" component="div" className="error" />
            </div>
            <div className="flex flex-col text-lg">
              <label htmlFor="description">Description:</label>
              <Field
                as="textarea"
                name="description"
                id="description"
                className="px-1 rounded-lg focus:outline-solid outline-gray-600"
              />
            </div>
            <p>Tags:</p>
            <div className="grid grid-cols-3 gap-2 py-2">
              <label
                className="flex items-center gap-1 outline outline-gray-600 rounded-lg px-2"
                htmlFor="tag-urgent"
              >
                <Field
                  type="checkbox"
                  name="tags"
                  value="urgent"
                  id="tag-urgent"
                />
                Urgent
              </label>
              <label
                className="flex items-center gap-1 outline outline-gray-600 rounded-lg px-2"
                htmlFor="tag-personal"
              >
                <Field
                  className="p-4"
                  type="checkbox"
                  name="tags"
                  value="personal"
                  id="tag-personal"
                />
                Personal
              </label>
              <label
                className="flex items-center gap-1 outline outline-gray-600 rounded-lg px-2"
                htmlFor="tag-lists"
              >
                <Field
                  type="checkbox"
                  id="tag-lists"
                  name="tags"
                  value="lists"
                />
                Lists
              </label>
              <label
                className="flex items-center gap-1 outline outline-gray-600 rounded-lg px-2"
                htmlFor="tag-project"
              >
                <Field
                  type="checkbox"
                  id="tag-project"
                  name="tags"
                  value="project"
                />
                Project
              </label>
            </div>
            <div className="flex justify-end">
              <button className="" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Adding Task..." : "Add Task"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default FormComponent;
