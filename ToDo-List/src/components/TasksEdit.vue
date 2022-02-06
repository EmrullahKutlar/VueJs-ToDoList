<!--eslint-disable vue/no-mutating-props -->
<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Task</h5>
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
              v-model="task.title"
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Detail"
              v-model="task.description"
            ></textarea>
          </div>
          <div class="form-group">
            <Multiselect
              v-model="task.tags"
              mode="tags"
              :close-on-select="true"
              :searchable="true"
              :create-option="false"
              :options="options"
              placeholder="Tags"
            />
          </div>
          <div class="form-group">
            <!-- eslint-disable-next-line vue/no-mutating-props -->
            <select class="custom-select" v-model="task.is_completed">
              <option value="true">Active</option>
              <option value="false">Done</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            @click="editedTask(task)"
            class="btn btn-primary"
            data-dismiss="modal"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();
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
  props: {
    task: Object,
  },
  components: {
    Multiselect,
  },
  data() {
    return {
      options: [
        { value: { project: "Project" }, label: "Project" },
        { value: { personal: "Personal" }, label: "Personal" },
        { value: { urgent: "Urgent" }, label: "Urgent" },
        { value: { list: "List" }, label: "List" },
      ],
    };
  },
  methods: {
    editedTask(task) {
      try {
        axios.patch("http://localhost:3000/tasks/" + task.id, {
          title: task.title,
          description: task.description,
          tags: task.tags,
          is_completed: !task.is_completed,
          updated_at: today,
        });
        toast.success("Task Successfully Edited");
        this.emitter.emit("newEdittedTask", this.task);
      } catch (error) {
        toast.error(error);
      }
    },
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
