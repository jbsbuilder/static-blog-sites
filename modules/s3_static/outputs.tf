output "domain_name" {
  value = aws_s3_bucket.static_blog_site.bucket_regional_domain_name
}

output "bucket_id" {
  value = aws_s3_bucket.static_blog_site.id
}
