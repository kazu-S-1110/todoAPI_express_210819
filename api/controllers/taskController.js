const mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

// 全てのタスクを取得する
exports.all_tasks = (req, res) => {
  Task.find({}, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

//新しいタスクを作成する
exports.create_task = (req, res) => {
  var new_task = new Task(req.body);
  new_task.save((err, taskList) => {
    if (err) res.send(err);
    res.json(task);
  });
};

//特定のタスクを取得する
exports.load_task = (req, res) => {
  Task.findById(req.params.taskId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

//特定のタスクを更新する
exports.update_task = (req, res) => {
  Task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

exports.delete_task = (req, res) => {
  Task.remove(
    {
      _id: req.params.taskId,
    },
    (err, task) => {
      if (err) res.send(err);
      res.json({ message: 'Task successfully deleted' });
    }
  );
};
