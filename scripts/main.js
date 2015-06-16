import TaskListView from './views/task-list';
import {TaskCollection} from './models/tasks';


(function(){
  'use strict';

  $(document).ready(function(){
    var tasks = new TaskCollection();

    tasks.fetch().then(function(){
      var taskList = new TaskListView({
        collection: tasks,
      });
      $('.todo-list').append(taskList.el);
    });
  });
})();
