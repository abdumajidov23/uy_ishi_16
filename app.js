async function getUserAndPosts(userId) {
      try {
            const user_response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            const user_data = await user_response.json()
            console.log(
`name: ${user_data.name},
city: ${user_data.address.city},
companyname: ${user_data.company.name}
          `);
            
                const post_response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
                const post_data = await post_response.json()
            
                console.log('Titles of all posts:');
                post_data.forEach(post => {
                      console.log(post.id,post.title);
                    });
                
                  } catch (error) {
                        console.log(error);
                      }
                    }
                    getUserAndPosts(1);