module "tfstate" {
  source = "./modules/s3"

  bucket_name = var.bucket_name
  acl = "private"
}

module "static_bucket" {
  source = "./modules/s3_static"

  bucket_name = "cloudsmithlabs.com"
  acl = "public-read"
}

module "cloudFront" {
  source = "./modules/cloudFront"

  domain_name = module.static_bucket.domain_name
  acm_certificate_arn = module.acm.acm_certificate_arn
  bucket_id = module.static_bucket.bucket_id
}

module "acm" {
  source = "./modules/acm"

  providers = {
    aws.acm = aws.acm
   }
}

 module "route53" {
  source = "./modules/route53"

  cloudfront_id = module.cloudFront.cloudfront_id
  cloudfront_zone = module.cloudFront.cloudfront_zone
}
