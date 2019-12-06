<?
$file = file_get_contents('js/in.json');  

$email = $_POST['email'];
          
$taskList = json_decode($file,TRUE);        
                        
unset($file);                               
           
$taskList[] = array('email'=>$email);        
          
file_put_contents('js/in.json',json_encode($taskList));  
          
unset($taskList);   
?>