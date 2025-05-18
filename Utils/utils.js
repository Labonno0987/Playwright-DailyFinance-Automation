
const randomNo=( min , max ) => {

    let randomNo = Math.random() * (max-min)+min;
    return parseInt(randomNo); 

}

const BaseUrl = "https://gmail.googleapis.com";
const token = "";
const getEmailList= async({request}) => {
    const res1 = await request.get(BaseUrl+"/gmail/v1/users/me/messages",{

        headers: {
            "Accept":"application/json",
            "Authorization":"Bearer "+token
        }
    })
    const list = await res1.json();
    const emailId = list.messages[0].id;
    console.log("Email ID fetched:", emailId);
    return emailId;

}

const getEmailRead = async ({ request }) => {
    const emailId = await getEmailList({ request }); 
    const res2 = await request.get(BaseUrl+"/gmail/v1/users/me/messages/" + emailId, {
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer "+token
        }
    });

    const resJson = await res2.json();
    const mailBody = resJson.snippet;
    console.log("Email body:", mailBody);
    return mailBody;
};

export {randomNo};
export { getEmailList,getEmailRead };

