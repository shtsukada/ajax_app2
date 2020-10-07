class Post < ApplicationRecord
  validates :contents, presence: true
end