export function encodeBase64(data: string): string {
    console.log(btoa(data))
    return btoa(data);
  }
  
  export function decodeBase64(encodedData: string): string {
    return atob(encodedData);
  }

  
function hashPass(password : string, passhash : string){
    console.log(password+" "+passhash);  
}
export default hashPass;