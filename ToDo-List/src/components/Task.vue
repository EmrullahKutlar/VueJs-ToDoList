<template>
  <div class="container-fuild mt-3">
    <div class="col-12">
      <div class="row col-12 d-flex">
        <div class="col-12 col-md-2 tasks">Tasks</div>
        <div class="col-6 col-md-5 d-flex justify-content-center">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div class="col-6 col-md-5 d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-outline-primary btn-icon btn-icon-start addNew"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="acorn-icons acorn-icons-plus undefined"
            >
              <path d="M10 17 10 3M3 10 17 10"></path>
            </svg>
            New Task
          </button>
        </div>
      </div>
    </div>
    <div class="col-12 mt-3">
      <div class="row col-12 d-flex">
        <div class="col-12 col-md-2">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  class="bi bi-card-list mr-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                  />
                  <path
                    d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
                  />
                </svg>
                <span>All</span>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  class="bi bi-activity mr-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                  />
                </svg>
                <span>Active</span>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  class="bi bi-check2-all mr-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"
                  />
                  <path
                    d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"
                  />
                </svg>
                <span>Done</span>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  class="bi bi-tags mr-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"
                  />
                  <path
                    d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"
                  />
                </svg>
                <div class="btn-group">
                  <button
                    class="btn btn-secondary btn-sm dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Tags
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-circle mr-2"
                        viewBox="0 0 16 16"
                        style="color: #1ea8e7"
                      >
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                        /></svg
                      >Project</a
                    >
                    <a class="dropdown-item" href="#"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-circle mr-2"
                        viewBox="0 0 16 16"
                        style="color: #ebb71a"
                      >
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                        /></svg
                      >Personal</a
                    >
                    <a class="dropdown-item" href="#"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-circle mr-2"
                        viewBox="0 0 16 16"
                        style="color: #771a23"
                      >
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                        /></svg
                      >Urgent</a
                    ><a class="dropdown-item" href="#"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-circle mr-2"
                        viewBox="0 0 16 16"
                        style="color: #439b38"
                      >
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                        /></svg
                      >Lists</a
                    >
                  </div>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  fill="currentColor"
                  class="bi bi-trash mr-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
                <span>Trash</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="col">
          <div class="row"><Tasks :tasks="this.tasks"></Tasks></div>
        </div>
      </div>
    </div>
  </div>
  <TasksEdit></TasksEdit>
</template>

<script>
import Tasks from "./Tasks.vue";
import TasksEdit from "./TasksEdit.vue";
import axios from "axios";
export default {
  components: {
    Tasks,
    TasksEdit,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get("http://localhost:3000/tasks");
        // JSON responses are automatically parsed.
        this.tasks = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style></style>
