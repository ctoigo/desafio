import { onMounted, ref } from 'vue';
import TaskForm from '../../components/TaskForm/TaskForm.vue';
import TaskList from '../../components/TaskList/TaskList.vue';
import api from '../../services/api';

export default {
  components: { TaskForm, TaskList },
  setup() {
    const tasks = ref([]);

    const fetchTasks = async () => {
      const response = await api.get('/tasks');
      tasks.value = response.data;
    };

    onMounted(fetchTasks);

    return { tasks, fetchTasks };
  },
};
