<template>
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">New Task</h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <input
            type="title"
            class="form-control"
            placeholder="Title"
            v-model="newTask.title"
          />
        </div>
        <div class="form-group">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Detail"
            v-model="newTask.description"
          ></textarea>
        </div>
        <div class="form-group">
          <Multiselect
            v-model="newTask.tags"
            mode="tags"
            :close-on-select="true"
            :searchable="true"
            :create-option="false"
            :options="options"
            placeholder="Tags"
          />
        </div>
        <div class="form-group">
          <select class="custom-select" v-model="newTask.is_completed">
            <option selected>Status</option>
            <option value="true">Active</option>
            <option value="false">Disable</option>
          </select>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Close
        </button>
        <button
          type="button"
          @click.prevent="addNewTask"
          class="btn btn-primary"
        >
          Save changes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import axios from "axios";
const now = new Date();
const today =
  now.toLocaleDateString() +
  "  " +
  now.toLocaleTimeString("tr-TR", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      newTask: {
        title: "",
        description: "",
        tags: [],
        is_completed: false,
      },

      options: [
        { value: { project: "Project" }, label: "Project" },
        { value: { personal: "Personal" }, label: "Personal" },
        { value: { urgent: "Urgent" }, label: "Urgent" },
        { value: { list: "List" }, label: "List" },
      ],
    };
  },
  methods: {
    addNewTask() {
      console.log(this.newTask.title);
      console.log(this.newTask.description);
      console.log(this.newTask.tags);
      console.log(this.newTask.is_completed);
      try {
        axios.post("http://localhost:3000/tasks/", {
          title: this.newTask.title,
          description: this.newTask.description,
          tags: this.newTask.tags,
          is_completed: !this.newTask.is_completed,
          created_at: today,
          updated_at: today,
        });
        // JSON responses are automatically parsed.
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
