<template>
  <div>
    <div v-for="message in messages" :key="message.id">
      {{ message.text }}
    </div>
    <form @submit.prevent="sendMessage">
      <input v-model="newMessage" />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ChatWindow',
  data() {
    return {
      messages: [],
      newMessage: '',
    };
  },
  methods: {
    async sendMessage() {
      const response = await fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: this.newMessage,
        }),
      });
      if (response.ok) {
        this.newMessage = '';
      }
    },
    async fetchMessages() {
      const response = await fetch('http://localhost:3000/messages');
      if (response.ok) {
        const messages = await response.json();
        this.messages = messages;
      }
    },
  },
  mounted() {
    this.fetchMessages();
    setInterval(() => {
      this.fetchMessages();
    }, 1000);
  },
};
</script>
