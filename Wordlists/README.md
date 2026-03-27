This contains various wordlists for pentesting.

### common-SSH-passlist.txt
Passlist with common SSH credentials

### kerberos-names.txt
List of common corporate usernames that can be used for bruteforcing via kerberos

`nmap -p 88 --script krb5-enum-users --script-args="krb5-enum-users.realm='DOMAIN.LOCAL',userdb=/path/kerberos-names.txt" <target-ip>`
