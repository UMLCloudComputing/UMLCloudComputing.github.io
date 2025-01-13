variable "name" {
    description = "Unique name for NAT instance"
    type = string
}

variable "ami_id" {
    description = "ID of the AMI to use"
    type = string
}

variable "security_group_ingress_cidr_ipv4" {
    description = "Security group ingress (IPV4)"
    type = string
}

variable "ssh_key pair name" {
    description = "Name of the SSH key-pair for the NAT instance"
    type = string
}

variable "subnet_id" {
    description = "ID of the subnet the instance is created in"
    type = string
}

variable "vpc_id" {
    description = "ID of the VPC the NAT instance will be created in"
    type = string
}