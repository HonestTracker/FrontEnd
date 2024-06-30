// delete_comment.js

export const deleteComment = async (token, comment_id) => {
    try {
      const response = await fetch(`https://api.honesttracker.nl/api/products/comments/delete`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            comment_id: comment_id,
            device: "web",
          }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('RESPONSE', data);
      return data; // Optionally return something meaningful if needed
    } catch (error) {
      console.error("Error deleting comment:", error);
      throw error; // Re-throw the error so it can be handled in the component
    }
  };
  