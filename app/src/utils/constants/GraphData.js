const Utils = {
    months({ count }) {
      const monthNames = ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"];
      const result = [];
      const date = new Date();
      for (let i = 0; i < count; i++) {
        result.push(monthNames[new Date(date.getFullYear(), date.getMonth() - i, 1).getMonth()]);
      }
      return result.reverse();
    }
  };

  export default Utils