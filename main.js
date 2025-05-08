const UserCard = {
  props: ["user"],
  template: `
    <div class="rounded-lg shadow-lg p-6 hover:shadow-xl transition-all transform duration-500 hover:scale-105 bg-white">

      <h2 class="text-2xl font-bold mb-2 hover:text-primary">{{ user.word }}</h2>

      <p class=" mb-2">
        <strong class="text-primary">Meaning:</strong> {{ user.meaning }}
      </p>

      <div class="flex items-center space-x-2 mb-2">
        <p ><strong>Pronunciation:</strong> {{ user.pronunciation }}</p>
      </div>
      
    </div>
  `,
};

const app = {
  components: {
    UserCard,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    fetch("https://openapi.programming-hero.com/api/level/1")
      .then((res) => res.json())
      .then((data) => {
        this.users = data.data.slice(0, 12);
      });
  },
};
