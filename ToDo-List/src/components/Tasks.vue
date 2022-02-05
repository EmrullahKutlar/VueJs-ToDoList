<template>
  <div
    v-for="task in tasks"
    :key="task"
    class="card col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 task-card m-2"
  >
    <div class="card-body">
      <div class="row">
        <div class="done">
          <input
            type="checkbox"
            name=""
            id=""
            :set="task.is_completed"
            :checked="task.is_completed"
            @click="
              changeStatus(task.id, task.is_completed),
                (task.is_completed = !task.is_completed)
            "
          />
        </div>
        <div
          class="col mt-3"
          @click="
            changeStatus(task.id, task.is_completed),
              (task.is_completed = !task.is_completed)
          "
        >
          <h5
            class="card-title text-center"
            :class="{ completed: task.is_completed }"
          >
            {{ task.title }}
          </h5>
          <p class="card-text" :class="{ completed: task.is_completed }">
            {{ task.description }}
          </p>
          <div class="tags d-flex">
            <div v-for="tag in task.tags" :key="tag">
              <p
                class="tag-project mr-3"
                :class="{ completed: task.is_completed }"
                v-if="tag.project"
              >
                {{ tag.project }}
              </p>
              <p
                class="tag-personal mr-3"
                :class="{ completed: task.is_completed }"
                v-if="tag.personal"
              >
                {{ tag.personal }}
              </p>
              <p
                class="tag-urgent mr-3"
                :class="{ completed: task.is_completed }"
                v-if="tag.urgent"
              >
                {{ tag.urgent }}
              </p>
              <p
                class="tag-list mr-3"
                :class="{ completed: task.is_completed }"
                v-if="tag.list"
              >
                {{ tag.list }}
              </p>
            </div>
          </div>
        </div>

        <div class="task-settings">
          <div class="btn-group">
            <button
              class="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                />
              </svg>
            </button>
            <div class="dropdown-menu card-dropdown-menu">
              <a class="dropdown-item" href="#">Edit</a>
              <a class="dropdown-item" href="#">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      check: false,
    };
  },
  props: {
    tasks: Array,
  },
  methods: {
    changeStatus(id, iscompleted) {
      console.log(id);
      console.log(iscompleted);
      if (iscompleted) {
        try {
          axios.patch("http://localhost:3000/tasks/" + id, {
            is_completed: false,
          });
          // JSON responses are automatically parsed.
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          axios.patch("http://localhost:3000/tasks/" + id, {
            is_completed: true,
          });
          // JSON responses are automatically parsed.
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  computed: {},
};
</script>

<style></style>
