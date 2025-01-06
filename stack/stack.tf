resource "aws_vpc" "Club-VPC" {
    cidr_block = "10.0.0.0/24"
    instance_tenacy = "default"
    tags = {
        Name = "Club-VPC"
    }
}

resource "aws_subnet" "public" {
    vpc_id = aws_vpc.Club-VPC.id
    cidr_block = "10.0.0.0/24"
}

resource "aws_subnet" "private" {
    
}