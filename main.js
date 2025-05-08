const UserCard = {
  props: ["user"],
  template: `
        <div class=" rounded-lg shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105">
          <h2 class="text-2xl font-bold text-gray-900 mb-4 hover:text-indigo-600">{{ user.word }}</h2>
  
          <p class="text-gray-700 text-sm mb-4">
            <strong class="text-indigo-500">Meaning:</strong> {{ user.meaning }}
          </p>

          <div class="flex items-center space-x-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.5-4.5M15 10l4.5 4.5M15 10V3m4.5 4.5L21 3M19.5 7.5L18 9l-1.5-1.5" />
            </svg>
          <p class="text-sm text-gray-600"><strong>Pronunciation:</strong> {{ user.pronunciation }}</p>
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
