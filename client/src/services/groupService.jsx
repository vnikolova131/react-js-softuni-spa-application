const baseUrl = 'htpp://localhost:3030/jsonstore/games'

export default {
  async  create(groupData) {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(groupData)
            });
            const result = await response.json();
            return result;
        }
};