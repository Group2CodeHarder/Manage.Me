//DON'T route here from api/index just yet! 

const router = require('express').Router()
const { models: { User, Message, Chat }} = require('../db')
module.exports = router;

// GET all chats
// filter by user id iwth include: { where } ?
router.get('/', (req, res, next) => {
  Chat.findAll()
  .then((foundChatrooms) => {
    res.send(foundChatrooms);
  })
  .catch(next);
});

// Get new messages
router.get('/messages/new', (req, res, next) => {
  if (!req.user) res.send(400);
  Message.findAll({
    where: {
      createdAt: {
        $gt: req.user.lastLogout,
      },
    },
    include: [
      { model: User, attributes: ['name'] }, // add a 'imageUrl' prop to User
      { model: Chat, attributes: ['name'] },
    ],
    order: [
      ['createdAt', 'ASC'],
    ],
  })
  .then((foundMessages) => {
    res.send(foundMessages);
  })
  .catch(next);
});

// GET messages in a chat
router.get('/:chatId/messages', async(req, res, next) => {
  try {
    const messages = await Message.findAll({
      where: {
        chatId: req.params.chatId,
      },
      include: [
        { model: User, attributes: ['username'] }, // add a 'imageUrl' prop to User
        { model: Chat, attributes: ['name'] },
      ],
      order: [
        ['createdAt', 'ASC'],
      ],
    });
    res.send(messages);
  }
  catch(err) {
    next(err)
  }
});

// POST message in chat
//use JSON.stringify and its inverse?
router.post('/:chatId/messages', (req, res, next) => {
  try {
    const user = await User.findById(req.body.userId);
    //const message is await Message.create(req.body) in JSON 
    //res.send that message
    //res.json(message) ??
  }
  catch(err) { 
    console.log(err);
    next(err); // any middleware to pass along err here?
  }
});
