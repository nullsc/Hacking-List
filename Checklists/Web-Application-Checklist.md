# Web Application Checklist

Generic checklist for web application penetration testing

## Prerequisites

- [ ] Check client documentation
- [ ] Get API schema
- [ ] Get subdomain list

## Scans

- [ ] Basic nmap scan
- [ ] Nikto scan eg. nikto -h [URL]
- [ ] Nessus scan
- [ ] BurpSuite scan
- [ ] Harvester/Dork scan
- [ ] ZAP scan
- [ ] GoBuster/Dirb scan
- [ ] Public Git repo
- [ ] .git file on webserver
- [ ] robots.txt

## Config Issues
- [ ] Allows clickjacking
- [ ] Default/installation pages left
- [ ] Sensitive cookies missing http only/secure flag 

## Login Page
- [ ] Can users be bruteforced
- [ ] Username enumeration

## Injection
- [ ] Check parameters for IDOR
- [ ] XSS
- [ ] SQL injection
