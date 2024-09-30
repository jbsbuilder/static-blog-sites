resource "aws_s3_bucket" "static_blog_site" {
  bucket = var.bucket_name
}

# resource "aws_s3_bucket_lifecycle_configuration" "static_blog_site" {
#     bucket = aws_s3_bucket.static_blog_site.id
#     prevent_destroy = true
# }

resource "aws_s3_bucket_versioning" "static_blog_site" {
  bucket = aws_s3_bucket.static_blog_site.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_acl" "static_blog_site" {
  bucket = aws_s3_bucket.static_blog_site.id
  acl = var.acl
}

resource "aws_s3_bucket_server_side_encryption_configuration" "static_blog_site" {
  bucket = aws_s3_bucket.static_blog_site.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "aws:kms"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "static_blog_site" {
  bucket = aws_s3_bucket.static_blog_site.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
