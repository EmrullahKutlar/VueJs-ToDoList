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
            <option value="false">Active</option>
            <option value="true">Done</option>
          </select>
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          @click="addNewTask"
          class="btn btn-primary"
          data-dismiss="modal"
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
import { useToast } from "vue-toastification";

const toast = useToast();

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
      var now = new Date();
      var today =
        now.toLocaleDateString() +
        "  " +
        now.toLocaleTimeString("tr-TR", {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        });
      try {
        axios.post("http://localhost:3000/tasks/", {
          title: this.newTask.title,
          description: this.newTask.description,
          tags: this.newTask.tags,
          is_completed: this.newTask.is_completed,
          in_trash: false,
          created_at: today,
          updated_at: today,
        });
        toast.success("Task successfully added");
        this.emitter.emit("newTask", this.newTask);
        // JSON responses are automatically parsed.
      } catch (error) {
        toast.error(error);
      }

      setTimeout(() => {
        (this.newTask.title = ""),
          (this.newTask.description = ""),
          (this.newTask.tags = []),
          (this.newTask.is_completed = false);
      }, 1000);
    },
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
